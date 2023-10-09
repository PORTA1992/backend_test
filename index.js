const express = require('express');
const app = express();

//cors 사용
const cors = require('cors');
app.use( cors() );

//params 방식
app.get('/sound/:name', function( req, res ){
    const param = req.params;
    console.log( '파람', param );

    //res.send( param.id );
    res.json({ 'userID' : param.name });
});


//query 방식
//sound/?cat=야옹&dog=멍멍
// app.get('/sound/', function( req, res ){
//     const param = req.query;
//     console.log( '파람', param );

//     res.json({ 'userID' : param.name });
// });

app.listen(3000);