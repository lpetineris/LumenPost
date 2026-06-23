const fs = require('fs');
const path = require('path');

module.exports = function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), 'public', 'guia_usuario_lumen_post.pdf');
    const file = fs.readFileSync(filePath);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline; filename="Guia_Lumen_Post.pdf"');
    res.status(200).send(file);
  } catch (e) {
    res.status(404).json({ error: 'Guia nao encontrado' });
  }
};
