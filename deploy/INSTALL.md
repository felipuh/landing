# Instalar landing en Nginx

Estos archivos preparan la landing como un servicio Node local en `127.0.0.1:4173`
y la exponen por Nginx usando:

- `http://landing.smart3ai.local`
- `http://landing.local`
- `http://smart3ai-landing.local`

## Comandos

```bash
cd /home/felipe/proyectos/landing
npm install

sudo install -m 0644 deploy/systemd/smart3ai-landing.service /etc/systemd/system/smart3ai-landing.service
sudo install -m 0644 deploy/nginx/landing.conf /etc/nginx/conf.d/landing.conf

grep -q 'landing.smart3ai.local' /etc/hosts || echo '127.0.0.1 landing.smart3ai.local landing.local smart3ai-landing.local' | sudo tee -a /etc/hosts

sudo systemctl daemon-reload
sudo systemctl enable --now smart3ai-landing.service
sudo nginx -t
sudo systemctl reload nginx
```

## Verificar

```bash
systemctl status smart3ai-landing.service --no-pager
curl -I http://landing.smart3ai.local/
```
