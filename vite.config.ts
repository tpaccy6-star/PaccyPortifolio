import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import handler from './api/contact.ts';

function contactDevPlugin(): Plugin {
  return {
    name: 'contact-dev-plugin',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url === '/api/contact' && req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });
          req.on('end', async () => {
            try {
              const parsedBody = body ? JSON.parse(body) : {};
              const apiReq = {
                method: req.method,
                body: parsedBody,
                headers: req.headers as Record<string, string | string[] | undefined>,
              };
              const apiRes = {
                status(code: number) {
                  res.statusCode = code;
                  return this;
                },
                json(data: any) {
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify(data));
                },
                send(data: any) {
                  res.end(data);
                },
                setHeader(name: string, value: string) {
                  res.setHeader(name, value);
                },
              };
              await handler(apiReq, apiRes);
            } catch (err: any) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(
                JSON.stringify({
                  success: false,
                  error: err?.message || 'Internal dev server error',
                })
              );
            }
          });
          return;
        }
        next();
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  Object.assign(process.env, env);

  return {
    plugins: [react(), contactDevPlugin()],
  };
});

