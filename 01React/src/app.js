import React, {useState} from 'react';

function App(){
    const [isSubMenuOpen, setIsSubMenuOpen]=useState(false);

    //funciones para mostar y ocultar el submenu al oasar e mouse
    const hanldeMouseEnter=()=> setIsSubMenuOpen(true);
    const hanldeMouseLeave=()=> setIsSubMenuOpen(false);

    //estilos css
    const styles={
        app:{
            fontFamily:'Arial, sans-serif',
            backgroundColor:'#f3f4f6',
            minHeight:'100vh',
            paddingTop:'60px',
            display:'flex',
            justifyContent:'center',
            alignItems:'flex-start',
        
        },
        menuContainer:{
            top:0,
            left:0,
            right:0,
            backgroundColor:'#333',
            color:'#fff',
            padding:'10px 20px',
            display:'flex',
            gap:'15px',
            justifyContent:'center',
            zIndex:1000,

        },
        menuItem:{
            position:'relative',
            padding:'10px 15px',
            cursor:'pointer',

        },
        subMenu:{
            position:'absolute',
            top:'100%',
            left:0,
            backgroundColor:'#444',
            padding:'10px 0',
            borderRadius:'5px',
            display:isSubMenuOpen ? 'block': 'none',
            width:'150px',
        },
        subMenuItem:{
            color:'#fff',
            padding:'10px',
            cursor:'pointer',
            textAlign:'center',

        },
    };

    return(
        <div style={styles.app}>
            <nav style={styles.menuContainer}>
                <div style={styles.menuItem} onClick={()=>alert('Inicio')}>
                    Inicio
                </div>
                <div style={styles.menuItem} onClick={()=>alert('Sobre Nosotros')}>
                    Sobre Nosotros
                </div>
                <div
                    
                >
                    Quienes somos
                </div>
            </nav>
        </div>

    )

}