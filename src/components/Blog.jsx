import React from 'react'; 
import Card from './Card';
import Header from './Header';
import About from './About';
import Popular_post from './Popular_post';
import Follow_me from './Follow_me';
import Footer from './Footer';
import MyBlog from './MyBlog.json';  

const Blog = () => {
  return (
    <>
      <Header />  

      <div className="row">
        <div className="leftcolumn">
          {MyBlog.map((post, index) => (
            <Card 
              key={index}
              title={post.title} 
              image={post.image} 
              date={post.date} 
              details={post.details} 
            />
          ))}
        </div>
        <div className="rightcolumn">
          <About />
          <Popular_post />
          <Follow_me />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Blog;
