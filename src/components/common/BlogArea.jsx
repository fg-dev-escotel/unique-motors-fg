import React from 'react';

const BlogArea = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Consejos para comprar tu primer vehículo en subasta',
      excerpt: 'Guía completa para principiantes en el mundo de las subastas vehiculares.',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      date: '15 Mar 2024',
      author: 'Admin',
      category: 'Consejos'
    },
    {
      id: 2,
      title: 'Cómo evaluar el estado de un vehículo antes de pujar',
      excerpt: 'Aprende a identificar los puntos clave para evaluar un vehículo usado.',
      image: 'https://images.unsplash.com/photo-1486496146582-9ffcd0b2b2b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      date: '12 Mar 2024',
      author: 'Admin',
      category: 'Guías'
    },
    {
      id: 3,
      title: 'Tendencias del mercado automotriz 2024',
      excerpt: 'Análisis de las principales tendencias y precios del mercado actual.',
      image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      date: '10 Mar 2024',
      author: 'Admin',
      category: 'Mercado'
    }
  ];

  return (
    <div className="blog-area py-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="site-heading text-center">
              <span className="site-title-tagline">Nuestro Blog</span>
              <h2 className="site-title">Últimas <span>Noticias</span></h2>
              <div className="heading-divider"></div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-lg-4 col-md-6">
              <div className="blog-item">
                <div className="blog-img">
                  <img src={post.image} alt={post.title} />
                  <div className="blog-date">
                    <span>{post.date}</span>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span><i className="far fa-user"></i> {post.author}</span>
                    <span><i className="far fa-folder"></i> {post.category}</span>
                  </div>
                  <h4>
                    <a href={`/blog/${post.id}`}>{post.title}</a>
                  </h4>
                  <p>{post.excerpt}</p>
                  <a href={`/blog/${post.id}`} className="read-btn">
                    Leer Más <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row mt-4">
          <div className="col-12 text-center">
            <a href="/blog" className="theme-btn">
              Ver Todo el Blog <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArea;