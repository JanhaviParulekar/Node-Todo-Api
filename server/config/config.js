var env = process.env.NODE_ENV || 'development';

if(env === 'development'){
    process.env.PORT =3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp' ;
} else if (env === 'test'){
    process.env.PORT =3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest' ;
} else if (env === 'prod') {
    process.env.MONGODB_URI = 'mongodb://parulekar.j:Americanme94@ds241737.mlab.com:41737/todos';
}
