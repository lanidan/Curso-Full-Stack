// main.js - interacciones básicas


document.addEventListener('DOMContentLoaded', ()=>{
// año en footer
const yearEls = [document.getElementById('year'), document.getElementById('year-2'), document.getElementById('year-3')];
yearEls.forEach(e=>{ if(e) e.textContent = new Date().getFullYear(); });


// cargar posts de ejemplo (cuando haya backend reemplazar URL)
const samplePosts = [
{ id:1, title:'Entrenamiento Vikingo: fuerza y eco', slug:'entrenamiento-vikingo', summary:'Rutinas para fuerza y resistencia...', image:'/assets/img/sample1.jpg', created_at:'2025-11-01' },
{ id:2, title:'Elegancia en el gym: cómo elegir tu indumentaria', slug:'elegancia-en-el-gym', summary:'Consejos para vestir con estilo...', image:'/assets/img/sample2.jpg', created_at:'2025-10-23' }
];


renderPosts(samplePosts);


// formularios
const loginForm = document.getElementById('login-form');

if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        // TODO: fetch a /api/auth/login
        alert("Login enviado (placeholder)");
    });
}
});