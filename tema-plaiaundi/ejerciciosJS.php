
<?php
/*
Template Name: Ejercicios JS
*/
get_header(); ?>
    
    <main>
        <h1>Ejercicios de JavaScript</h1>

    <div class="lista-ejercicios">
        <?php
        $directorio_servidor = get_stylesheet_directory() . '/js/';

        $directorio_url = get_stylesheet_directory_uri() . '/js/';

        if (is_dir($directorio_servidor)) {

            $archivos = array_diff(scandir($directorio_servidor), array('.', '..'));

            foreach ($archivos as $archivo) {
                if (pathinfo($archivo, PATHINFO_EXTENSION) === 'js') {

                    $nombre_bonito = ucfirst(str_replace(array('.js', '_', '-'), array('', ' ', ' '), $archivo));

                    $ruta_js_completa = $directorio_url . $archivo;

                    echo '<button class="btn-ejercicio" onclick="cargarEjercicio(\'' . esc_url($ruta_js_completa) . '\')">';
                    echo esc_html($nombre_bonito);
                    echo '</button> ';
                }
            }
        } else {
            echo '<p>No se encontró la carpeta "js" dentro del tema. Asegúrate de crear la carpeta en: <code>' . esc_html($directorio_servidor) . '</code></p>';
        }
        ?>
    </div>
    </main>

    <style>
    .contenedor-ejercicios {
        max-width: 900px;
        margin: 20px auto;
        padding: 20px;
        font-family: Arial, sans-serif;
    }

    .lista-ejercicios {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin: 20px 0;
    }

    .btn-ejercicio {
        background: #FFF;
        border: 1px solid #E85238;
        color: #E85238;
        padding: 10px 18px;
        border-radius: 6px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.2s ease, transform 0.1s ease;
    }

    .btn-ejercicio:hover {
        color: white;
        background-color: #E85238;
        transform: translateY(-2px);
    }

    .btn-ejercicio:active {
        transform: translateY(0);
    }
</style>

    <script>
function cargarEjercicio(rutaScript) {
    
    const scriptViejo = document.getElementById('script-activo');
    if (scriptViejo) {
        scriptViejo.remove();
    }

    const nuevoScript = document.createElement('script');
    nuevoScript.id = 'script-activo';
    nuevoScript.type = 'module';
    nuevoScript.src = rutaScript + '?v=' + new Date().getTime();
    
    document.body.appendChild(nuevoScript);
}
</script>
    <?php get_footer(); ?>
</body>

</html>