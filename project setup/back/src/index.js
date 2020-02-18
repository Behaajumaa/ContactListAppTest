import app from './app'

app.get( '/', (req, res) => res.send("hellllo") );

app.listen( 8080, () => console.log('server listening on port 8080') )


import db from './db'

