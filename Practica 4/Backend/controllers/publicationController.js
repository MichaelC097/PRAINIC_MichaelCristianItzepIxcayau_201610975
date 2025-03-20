const db = require('../config/db');

// Crear una publicación
const createPublication = async (req, res) => {
    const { id_curso, id_catedratico, registro_academico, contenido, tipo } = req.body;
    
    try {
        await db.query('INSERT INTO publicaciones (id_curso, id_catedratico, registro_academico, contenido, tipo) VALUES (?, ?, ?, ?, ?)',
            [id_curso, id_catedratico, registro_academico, contenido, tipo]);
        
        res.status(201).json({ message: 'Publicación creada exitosamente' });
    } catch (error) {
        console.error('Error al crear publicación:', error);
        res.status(500).json({ message: 'Error en el servidor', error });
    }
};

// Obtener todas las publicaciones
const getAllPublications = async (req, res) => {
    try {
        const [publications] = await db.query('SELECT * FROM publicaciones ORDER BY fecha_publicacion DESC');
        res.status(200).json(publications);
    } catch (error) {
        console.error('Error al obtener publicaciones:', error);
        res.status(500).json({ message: 'Error en el servidor', error });
    }
};

// Filtrar publicaciones por curso o catedrático
const filterPublications = async (req, res) => {
    const { tipo, valor } = req.query;
    
    let query = '';
    let params = [];
    
    if (tipo === 'Curso') {
        query = 'SELECT * FROM publicaciones WHERE id_curso = ? ORDER BY fecha_publicacion DESC';
        params = [valor];
    } else if (tipo === 'Catedratico') {
        query = 'SELECT * FROM publicaciones WHERE id_catedratico = ? ORDER BY fecha_publicacion DESC';
        params = [valor];
    } else {
        return res.status(400).json({ message: 'Tipo de filtro inválido' });
    }
    
    try {
        const [results] = await db.query(query, params);
        res.status(200).json(results);
    } catch (error) {
        console.error('Error al filtrar publicaciones:', error);
        res.status(500).json({ message: 'Error en el servidor', error });
    }
};

// Agregar un comentario a una publicación
const addComment = async (req, res) => {
    const { id_publicacion, registro_academico, comentario } = req.body;
    
    try {
        await db.query('INSERT INTO comentarios (id_publicacion, registro_academico, comentario) VALUES (?, ?, ?)',
            [id_publicacion, registro_academico, comentario]);
        
        res.status(201).json({ message: 'Comentario agregado exitosamente' });
    } catch (error) {
        console.error('Error al agregar comentario:', error);
        res.status(500).json({ message: 'Error en el servidor', error });
    }
};

module.exports = {
    createPublication,
    getAllPublications,
    filterPublications,
    addComment
};
