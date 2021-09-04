import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ServiceProyecto {
    
    //Datos de introduccion de proyectos
    private datosProyecto: InterfaceProyectos[] = [
        {
            imagen: 'https://res.cloudinary.com/da3adzyke/image/upload/v1630449768/imagenes%20protafolio/Super_farmacias_castillo/onc3vn8jdlfjqygn1gw8.jpg',
            nombre: 'Súper Farmacias Castillo',
            desc: 'Aplicación multiplataforma inspirada en UberEats para la compra de productos médicos con roles de administrador y usuario.',
        },
        {
            imagen: 'https://res.cloudinary.com/da3adzyke/image/upload/v1630449210/imagenes%20protafolio/BpAlarm/znoeujev33jhz8umtxzp.jpg',
            nombre: '!BpAlarm¡',
            desc: 'Aplicación Web y móvil para la activación de una alarma de mochila con el fin de evitar robos, así como la creación de la alarma con arduino.',
        },
        {
            imagen: 'https://res.cloudinary.com/da3adzyke/image/upload/v1630432423/imagenes%20protafolio/lista_del_d%C3%ADa/p7va9vdv4mgqxttoyqkr.jpg',
            nombre: 'Lista del día',
            desc: 'Aplicación en Flutter para ordenar las tareas del día actual.',
        },
        {
            imagen: '',
            nombre: 'BabyHealth',
            desc: 'Página web con inicio de sesión, creada con el fin de resolver dudas antes y durante el embarazo.',
        },
        {
            imagen: 'https://res.cloudinary.com/da3adzyke/image/upload/v1630450312/imagenes%20protafolio/Tus_deberes/jefbgjg1wgu0rxeddaba.jpg',
            nombre: 'Tus deberes',
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
            imagenes: [
                'https://res.cloudinary.com/da3adzyke/image/upload/v1630528162/imagenes%20protafolio/Super_farmacias_castillo/xivzo99xlw03pwbe4dzb.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1630528162/imagenes%20protafolio/Super_farmacias_castillo/trhqyv6atw8wvc3dofge.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1630528163/imagenes%20protafolio/Super_farmacias_castillo/octeeolr43ojdlu26mt9.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1630528163/imagenes%20protafolio/Super_farmacias_castillo/fvy1kyyvhtiftjwwljlq.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1630528163/imagenes%20protafolio/Super_farmacias_castillo/o6idb8m7owbdbsrygwuc.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1630528162/imagenes%20protafolio/Super_farmacias_castillo/c8ukpj1wpzmzvihiyuny.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1630528163/imagenes%20protafolio/Super_farmacias_castillo/gdllspcnjysutetrfhvp.jpg',                
                'https://res.cloudinary.com/da3adzyke/image/upload/v1630528164/imagenes%20protafolio/Super_farmacias_castillo/omdg2wbacoobbek63os0.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1630528164/imagenes%20protafolio/Super_farmacias_castillo/dpejk5ug1ckl49ka0x0i.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1630528163/imagenes%20protafolio/Super_farmacias_castillo/pzkrxriu7sxden6iq5at.jpg',                
            ],
            imagenes2: [],
        },
        {    
            info: 'BPAlarm es un conjunto de aplicación web, móvil y dispositivo arduino, en donde para descargar la app debes registrarte en la aplicación web, luego podras descargar la aplicación móvil, iniciar sesión y activar o desactivar tu BpAlarm.',
            info2:'Creado mediante una aplicación móvil, HC-05, alarma, sensores y arduino Uno, se diseño un dispositivo que se coloca en la mochila. Sonando cada vez que se activa y detecta que la mochila se movió de lugar.',
            lenguaje: 'C#, TypeScript, C++, Net Core, Iónic',
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
            info: 'Lista del día es una aplicación multiplataforma en la cual se puede agregar tareas importantes que se deben hacer durante el día, esto mediante Sqflite la cual guarda las cosas completadas, se puede eliminar, modificar o agregar nuevas tareas.',
            info2: '',
            lenguaje: 'Dart y Flutter',
            imagenes: [
                'https://res.cloudinary.com/da3adzyke/image/upload/v1630530930/imagenes%20protafolio/lista_del_d%C3%ADa/qodkgblgnqb5bnmb6mf2.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1630432423/imagenes%20protafolio/lista_del_d%C3%ADa/p7va9vdv4mgqxttoyqkr.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1630432423/imagenes%20protafolio/lista_del_d%C3%ADa/gyh6wecflzlqjzqysxhk.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1630432423/imagenes%20protafolio/lista_del_d%C3%ADa/em0b1yebzsznkcextced.jpg'
            ],
            imagenes2: [],
        },
        {    
            info: 'BabyHealth es una página web en la que al iniciar sesión puedes obtener información importante respecto a temas del embarazo, desde cuidados, ejercicios, videos, hasta recetas de papilla para bebés.',
            info2: 'Puedes al mismo tiempo ver los datos de tu cuenta, así como modificarlos o eliminar.',
            lenguaje: 'HTML, CSS, PHP, MySql',
            imagenes: [
                'https://res.cloudinary.com/da3adzyke/image/upload/v1630432423/imagenes%20protafolio/lista_del_d%C3%ADa/gyh6wecflzlqjzqysxhk.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1630432423/imagenes%20protafolio/lista_del_d%C3%ADa/em0b1yebzsznkcextced.jpg'
            ],
            imagenes2: [],
        },
        {    
            info: 'Tus deberes es una aplicación móvil en la cual puedes escribir las tareas que debes hacer así como cosas importantes.',
            info2: 'Se puede editar, modificar, eliminar, esto mediante SQLite.',
            lenguaje: 'Java',
            imagenes: [
                'https://res.cloudinary.com/da3adzyke/image/upload/v1630450312/imagenes%20protafolio/Tus_deberes/jefbgjg1wgu0rxeddaba.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1630450311/imagenes%20protafolio/Tus_deberes/prdpcckbu7og38jytibn.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1630450312/imagenes%20protafolio/Tus_deberes/ctz7rswbzxzh23pzw7mz.jpg',
                'https://res.cloudinary.com/da3adzyke/image/upload/v1630450316/imagenes%20protafolio/Tus_deberes/lghn127nkctmbosomrqn.jpg',
            ],
            imagenes2: [],
        },
        {    
            info: 'Ticket es una aplicación la cual se utilizó para simular como seria la compra de un boleto de camón el cual se podría adquirir desde la aplicación y devolvería un código QR, para después poderlo escanear en los autobuses.',
            info2: '',
            lenguaje: 'Java, PHP, MySql',
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
        console.log('Servicio listo para trabajar');
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
    imagenes: string[], //capturas móvil
    imagenes2: string[]  //capturas de web
}
