import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ServiceProyecto {
    
    //Datos de introduccion de proyectos
    private datosProyecto: InterfaceProyectos[] = [
        {
            imagen: 'https://res.cloudinary.com/da3adzyke/image/upload/v1631215820/imagenes%20protafolio/Super_farmacias_castillo/gmtluv6al39yvxwm5vdw.jpg',
            nombre: 'Súper Farmacias Castillo',
            desc: 'Aplicación multiplataforma inspirada en UberEats para la compra de productos médicos con roles de administrador y usuario.',
        },
        {
            imagen: 'https://res.cloudinary.com/da3adzyke/image/upload/v1630449210/imagenes%20protafolio/BpAlarm/znoeujev33jhz8umtxzp.jpg',
            nombre: '!BpAlarm¡',
            desc: 'Aplicación Web y móvil para la activación de una alarma de mochila con el fin de evitar robos, así como la creación de la alarma con arduino.',
        },        
        {
            imagen: 'https://res.cloudinary.com/da3adzyke/image/upload/v1638301043/imagenes%20protafolio/MIVenta/cnndgkleglyu6nhyjrjy.jpg',
            nombre: 'MiVenta',
            desc: 'Aplicación SPA tipo tienda en linea con roles de administrador y rol normal. En donde se pueden crear pedidos así como ver historiales, o manejar los productos existentes.',
        },
        {
            imagen: 'https://res.cloudinary.com/da3adzyke/image/upload/v1630432423/imagenes%20protafolio/lista_del_d%C3%ADa/p7va9vdv4mgqxttoyqkr.jpg',
            nombre: 'Deberes del día',
            desc: 'Aplicación en Flutter para ordenar las tareas del día actual.',
        },
        {
            imagen: 'https://res.cloudinary.com/da3adzyke/image/upload/v1630450312/imagenes%20protafolio/Tus_deberes/jefbgjg1wgu0rxeddaba.jpg',
            nombre: 'HoyDeber',
            desc: 'Aplicación móvil creada en java para ordenar los deberes del día.',
        },
        {
            imagen: 'https://res.cloudinary.com/da3adzyke/image/upload/v1630450017/imagenes%20protafolio/ticket/cc3kkux076u86bumufqs.jpg',
            nombre: 'Ticket',
            desc: 'Aplicación móvil creada en Java, para la simulación de la compra de boletos de autobús.',
        },
    ]



    //Mas informacíon de cada proyecto
    private masDatosProyecto: InterfaceProyecto[] = [
        {    
            info: 'Súper farmacias castillo es una aplicación multiplataforma creada para Farmacias Castillo negocio que pidió una aplicación para entregas a domicilio, la cual permite a los usuarios pedir sus artículos hasta el lugar donde se encuentran, esto usando la API de Google Maps, agregando sus artículos a un carrito de compra en donde se puede modificar la cuenta, y ver sus ordenes.',
            info2: 'Ademas cuenta con roles de administrador y usuario normal, en donde el administrador puede ver los pedidos que los usuarios han hecho así como la ubicación, CRUD de productos, CRUD de roles en donde puede agregar más roles todas estas peticiones protegidas mediante tokens.',
            lenguaje: 'Dart, C#, Flutter, Net Core, SQL Server',
            repositorioBackend: '',
            repositorioFrontend: '',
            imagenes: [
                'https://res.cloudinary.com/da3adzyke/image/upload/v1631215819/imagenes%20protafolio/Super_farmacias_castillo/lum7etvo1zr7sk0i77zn.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1630528164/imagenes%20protafolio/Super_farmacias_castillo/jwvsh4ugzl2b1ma9vmr4.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1631215819/imagenes%20protafolio/Super_farmacias_castillo/v9dadt2zd3luwaufwmq0.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1631215822/imagenes%20protafolio/Super_farmacias_castillo/ywzfgusl1cx0kmuhl8tp.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1631215820/imagenes%20protafolio/Super_farmacias_castillo/zakbcvffjque65ndpnxe.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1631215822/imagenes%20protafolio/Super_farmacias_castillo/fkiiqfmn8iggoflrgnrc.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1631215820/imagenes%20protafolio/Super_farmacias_castillo/gmtluv6al39yvxwm5vdw.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1631215823/imagenes%20protafolio/Super_farmacias_castillo/w7vb4v2sei6uxqcfn2qk.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1631215821/imagenes%20protafolio/Super_farmacias_castillo/xps3u4fzl0grbz3nme5q.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1631215821/imagenes%20protafolio/Super_farmacias_castillo/p1vzqj06rbhi5p9jughk.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1631215820/imagenes%20protafolio/Super_farmacias_castillo/gzihdrycse79pqgy5ums.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1631215822/imagenes%20protafolio/Super_farmacias_castillo/iaj7no8a1ogmrjueu9rr.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1631215820/imagenes%20protafolio/Super_farmacias_castillo/jd5obhnpng0wh2xf0igk.jpg',                
            ],
            imagenes2: [
                'https://res.cloudinary.com/da3adzyke/image/upload/v1631211245/imagenes%20protafolio/Super_farmacias_castillo/xvp1augvyjotrnwbhg9t.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1631211246/imagenes%20protafolio/Super_farmacias_castillo/k2oxyfnunuzwuuvnch6c.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1631211243/imagenes%20protafolio/Super_farmacias_castillo/hikddwsziak9twith3p5.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1631211246/imagenes%20protafolio/Super_farmacias_castillo/abhtesc7pxhqt6o0dtjb.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1631211246/imagenes%20protafolio/Super_farmacias_castillo/hgx6gbhid5uy3y1g7a4u.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1631211245/imagenes%20protafolio/Super_farmacias_castillo/csxjnh0j94fl1yywjmsy.jpg',
            ],
        },
        {    
            info: 'BpAlarm es un conjunto de aplicación web, móvil y dispositivo arduino, en donde para descargar la app debes registrarte en la aplicación web, luego podras descargar la aplicación móvil, iniciar sesión y activar o desactivar tu BpAlarm.',
            info2:'Creado mediante una aplicación móvil, HC-05, alarma, sensores y arduino Uno, se diseño un dispositivo que se coloca en la mochila. Sonando cada vez que se activa y detecta que la mochila se movió de lugar.',
            lenguaje: 'C#, TypeScript, C++, Net Core, Iónic',
            repositorioBackend: '',
            repositorioFrontend: '',
            imagenes: [                                                                
                'https://res.cloudinary.com/da3adzyke/image/upload/v1630450886/imagenes%20protafolio/BpAlarm/rclbcuyh8hbrizwhgls4.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1630449210/imagenes%20protafolio/BpAlarm/znoeujev33jhz8umtxzp.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1630530746/imagenes%20protafolio/BpAlarm/ndan0megiw34rhulamtd.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1630530746/imagenes%20protafolio/BpAlarm/ymndn32lmafowv7hbtii.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1630530746/imagenes%20protafolio/BpAlarm/fgegwjplos23rnbbaegk.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1630530746/imagenes%20protafolio/BpAlarm/cxxfd0mfmcm2sdqugfct.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1630530746/imagenes%20protafolio/BpAlarm/f1hjrrbddzvbru3tvdrm.jpg',                
            ],
            imagenes2: [
                'https://res.cloudinary.com/da3adzyke/image/upload/v1630629002/imagenes%20protafolio/BpAlarm/aou2uxysqrxcztxh0ox6.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1630629002/imagenes%20protafolio/BpAlarm/hndlfilpfwe5a9e5hkjd.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1630629001/imagenes%20protafolio/BpAlarm/hpcvu7ag436qkb9xp4gn.jpg',
            ],
        },        
        {    
            info: 'MiVenta es una aplicación SPA responsiva que cuenta con tokens y roles, en la cual un usuario puede crear su cuenta, modificarla, ver historiales de compra y hacer pedidos de artículos. Mientras el administrador puede crear, modificar, eliminar productos así como ver historiales de pedidos entregados y no entregados.',
            info2: 'El backend fue creado con SQL, C#, y .Net Core. Así como el frontend fue creado con TypeScript y Angular.',
            lenguaje: 'HTML, TypeScript, C#, SQL, .Net Core, Angular',
            repositorioBackend: 'https://github.com/FrancisTorresmex/WSMiVenta',
            repositorioFrontend: 'https://github.com/FrancisTorresmex/MiVenta_Angular',
            imagenes: [],
            imagenes2: [
                'https://res.cloudinary.com/da3adzyke/image/upload/v1638301045/imagenes%20protafolio/MIVenta/d42jvchstqbtq9kzckhv.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1638301044/imagenes%20protafolio/MIVenta/spjq0uikfbshgkeegyxm.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1638301043/imagenes%20protafolio/MIVenta/lbq2v3vb7mqsuouuldp2.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1638301043/imagenes%20protafolio/MIVenta/cnndgkleglyu6nhyjrjy.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1638301043/imagenes%20protafolio/MIVenta/i5bnxokk1epyzqcgq94y.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1638301043/imagenes%20protafolio/MIVenta/p0xpb1iixhzjrwnxsvs6.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1638301044/imagenes%20protafolio/MIVenta/njmkxhth2ukzdeiewbxv.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1638301044/imagenes%20protafolio/MIVenta/lyqgufl4e1ilnt9ulkes.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1638301044/imagenes%20protafolio/MIVenta/x4xm3hs0e2t6puds1qzq.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1638301045/imagenes%20protafolio/MIVenta/w5d83whb59k5pj1zdhm0.jpg',                
            ],
        },
        {    
            info: 'Deberes del día es una aplicación multiplataforma en la cual se puede agregar tareas importantes que se deben hacer durante el día, esto mediante Sqflite la cual guarda las cosas completadas, se puede eliminar, modificar o agregar nuevas tareas.',
            info2: '',
            lenguaje: 'Dart y Flutter',
            repositorioBackend: '',
            repositorioFrontend: 'https://github.com/FrancisTorresmex/Lista_del_dia',
            imagenes: [
                'https://res.cloudinary.com/da3adzyke/image/upload/v1630530930/imagenes%20protafolio/lista_del_d%C3%ADa/qodkgblgnqb5bnmb6mf2.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1630432423/imagenes%20protafolio/lista_del_d%C3%ADa/p7va9vdv4mgqxttoyqkr.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1630432423/imagenes%20protafolio/lista_del_d%C3%ADa/gyh6wecflzlqjzqysxhk.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1630432423/imagenes%20protafolio/lista_del_d%C3%ADa/em0b1yebzsznkcextced.jpg'
            ],
            imagenes2: [],
        },
        {    
            info: 'HoyDeber es una aplicación móvil en la cual puedes escribir las tareas que debes hacer así como cosas importantes.',
            info2: 'Se puede editar, modificar, eliminar, esto mediante SQLite.',
            lenguaje: 'Java',
            repositorioBackend: '',
            repositorioFrontend: '',
            imagenes: [
                'https://res.cloudinary.com/da3adzyke/image/upload/v1630450312/imagenes%20protafolio/Tus_deberes/jefbgjg1wgu0rxeddaba.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1630450311/imagenes%20protafolio/Tus_deberes/prdpcckbu7og38jytibn.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1630450312/imagenes%20protafolio/Tus_deberes/ctz7rswbzxzh23pzw7mz.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1630450316/imagenes%20protafolio/Tus_deberes/lghn127nkctmbosomrqn.jpg',
            ],
            imagenes2: [],
        },
        {    
            info: 'Ticket-value es una aplicación la cual se utilizó para simular como seria la compra de un boleto de camón el cual se podría adquirir desde la aplicación y devolvería un código QR, para después poderlo escanear en los autobuses.',
            info2: '',
            lenguaje: 'Java, PHP, MySql',
            repositorioBackend: '',
            repositorioFrontend: '',
            imagenes: [
                'https://res.cloudinary.com/da3adzyke/image/upload/v1630450873/imagenes%20protafolio/ticket/k4jruyfqywl3bxfqhqga.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1630450017/imagenes%20protafolio/ticket/cc3kkux076u86bumufqs.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1630450873/imagenes%20protafolio/ticket/zay7klibdkrqmumezukn.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1630450873/imagenes%20protafolio/ticket/qmmagg7puftv8uzeqtwf.jpg',
            ],
            imagenes2: [],
        }
    ];




    constructor() {
        // console.log('Servicio listo para trabajar');
    }
    
    /** Para ir al proyecto en especifico */

    //para retornar toda la lista de proyectos
    obtenerProyectos() {
        return this.datosProyecto;
    }

    //para retornar un solo proyecto
    obtenerProyecto(idx: number) {
        return this.datosProyecto[idx];
    }

    /** Para mostrar mas información del proyecto en especifico */

    //para retornar toda la lista de mas información
    ObtenerMasDatos() {
        return this.masDatosProyecto;
    }

    //para retornar mas información de un solo proyecto
    verMasDatos(idx: number) {
        return this.masDatosProyecto[idx]
    }

}


//modelo de mis proyectos, una interface obliga a la clase  o a los objteos a llevar todo esto
export interface InterfaceProyectos {
    imagen: string;
    nombre: string;
    desc: string;
}


//modelo de mi proyecto especifico, para mostrar mas información
export interface InterfaceProyecto {
    info: string,
    info2: string,
    lenguaje: string,
    repositorioBackend: string, //repositorio de github, si es '', entonces significa que el repositorio es privado y no habra link
    repositorioFrontend: string,
    imagenes: string[], //capturas móvil
    imagenes2: string[]  //capturas de web
}
