// import React from 'react';

function Main_1(props) {
    let {pavadinimas,content,img}=props;
  return (   

    <div>
    
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
          
            <p className="lead text-muted">{props.textas}</p>
            
          </div>
        </div>
      </section>
    
      <div className="album py-5 bg-light">
        <div className="container">
    
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
                <img src={img}/>
                <div className="card-body">
                    <h5 className="card-title">{pavadinimas}</h5>
                  <p className="card-text">{content}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}

export default Main_1;
