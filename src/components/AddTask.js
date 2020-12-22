import React from 'react';

class AddTask extends React.Component {
    render() { 
        return ( 
            <section>
                <h1 className="m-3">Nouvelle tache</h1>

                <div className="card mx-3">
                    <form className ="card-body" onSubmit={(e) => this.handleSubmit(e)}>
                        <div className ="form-group">
                            <label form="taskName">Nom de la tache</label>
                            <input type= "text" className="form-control" name="taskName" id="taskName" required required />

                        </div>
                        <button type ="submit" className="btn btn-primary">Creer</button>
                    </form>
                </div>
            </section>
          );
    }
}
 
export default AddTask;