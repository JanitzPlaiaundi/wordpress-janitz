<?php
/*
Template Name: Plantilla de Entradas con Filtro de Etiquetas
*/
get_header(); ?>

<main>
    <h2>Bienvenido a la página de WordPress de Janitz, pasa un buen rato.</h2>
    <h3>Entradas recientes</h3>

    <!-- 1. BARRA DE FILTROS POR ETIQUETA -->
    <div class="contenedor-etiquetas">
        <span class="titulo-etiquetas">Filtrar por etiqueta:</span>
        <?php
        // Obtener la etiqueta seleccionada de la URL (si existe)
        $etiqueta_actual = isset($_GET['etiqueta_filtrada']) ? sanitize_text_field($_GET['etiqueta_filtrada']) : '';

        // Botón para mostrar TODAS las entradas
        $clase_todas = empty($etiqueta_actual) ? 'etiqueta-btn activa' : 'etiqueta-btn';
        echo '<a href="' . esc_url(get_permalink()) . '" class="' . $clase_todas . '">Todas</a> ';

        // Obtener todas las etiquetas que tienen entradas publicadas
        $etiquetas = get_tags();

        if ($etiquetas) {
            foreach ($etiquetas as $tag) {
                $clase = ($etiqueta_actual === $tag->slug) ? 'etiqueta-btn activa' : 'etiqueta-btn';
                $url_filtro = add_query_arg('etiqueta_filtrada', $tag->slug, get_permalink());
                
                echo '<a href="' . esc_url($url_filtro) . '" class="' . $clase . '">';
                echo esc_html($tag->name) . ' (' . $tag->count . ')';
                echo '</a> ';
            }
        }
        ?>
    </div>

    <!-- 2. LISTADO DE ENTRADAS FILTRADAS -->
    <div class="lista-entradas">
        <?php
        // Configurar la consulta WP_Query
        $args = array(
            'post_type'      => 'post',
            'posts_per_page' => 12,
            'post_status'    => 'publish'
        );

        // Si hay una etiqueta seleccionada en la URL, filtrarla
        if (!empty($etiqueta_actual)) {
            $args['tag'] = $etiqueta_actual;
        }

        $consulta_posts = new WP_Query($args);

        if ($consulta_posts->have_posts()) :
            while ($consulta_posts->have_posts()) : $consulta_posts->the_post(); ?>

                <article class="tarjeta-post">
                    <?php if (has_post_thumbnail()) : ?>
                        <div class="post-thumb">
                            <a href="<?php the_permalink(); ?>">
                                <?php the_post_thumbnail('medium'); ?>
                            </a>
                        </div>
                    <?php endif; ?>

                    <h3>
                        <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                    </h3>

                    <p class="post-meta">
                        <?php echo get_the_date(); ?> | Por <?php the_author(); ?>
                    </p>

                    <!-- Mostrar las etiquetas específicas de esta entrada -->
                    <div class="post-tags">
                        <?php
                        $post_tags = get_the_tags();
                        if ($post_tags) {
                            foreach ($post_tags as $ptag) {
                                $url_tag = add_query_arg('etiqueta_filtrada', $ptag->slug, get_permalink());
                                echo '<a href="' . esc_url($url_tag) . '" class="tag-badge">#' . esc_html($ptag->name) . '</a> ';
                            }
                        }
                        ?>
                    </div>

                    <div class="post-excerpt">
                        <?php the_excerpt(); ?>
                    </div>
                </article>

            <?php endwhile;
            wp_reset_postdata();
        else : ?>
            <p class="no-posts">No se encontraron entradas para esta etiqueta.</p>
        <?php endif; ?>
    </div>
</main>

<style>
/* Estilos del contenedor y lista */
main {
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}

main h2, main h3 {
    text-align: center;
    color: #111;
}

/* Estilos de los botones de filtrado de etiquetas */
.contenedor-etiquetas {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin: 25px 0 35px 0;
}

.titulo-etiquetas {
    font-weight: bold;
    margin-right: 10px;
    color: #4a5568;
}

.etiqueta-btn {
    display: inline-block;
    padding: 6px 14px;
    background-color: #edf2f7;
    color: #2d3748;
    border-radius: 20px;
    text-decoration: none;
    font-size: 0.88rem;
    font-weight: 500;
    transition: all 0.2s ease;
}

.etiqueta-btn:hover {
    background-color: #cbd5e0;
    color: #1a202c;
}

.etiqueta-btn.activa {
    background-color: #2271b1;
    color: #ffffff;
}

/* Rejilla de tarjetas de entradas */
.lista-entradas {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.tarjeta-post {
    background-color: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
}

.post-thumb {
    width: 100%;
    height: 180px;
    margin-bottom: 15px;
    overflow: hidden;
    border-radius: 6px;
}

.post-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.tarjeta-post h3 {
    margin: 0 0 8px 0;
    font-size: 1.2rem;
}

.tarjeta-post h3 a {
    color: #1a202c;
    text-decoration: none;
}

.post-meta {
    font-size: 0.8rem;
    color: #718096;
    margin-bottom: 10px;
}

/* Insignias de etiquetas dentro de la tarjeta */
.post-tags {
    margin-bottom: 12px;
}

.tag-badge {
    font-size: 0.75rem;
    color: #2b6cb0;
    background-color: #ebf8ff;
    padding: 3px 8px;
    border-radius: 4px;
    text-decoration: none;
    margin-right: 4px;
}

.tag-badge:hover {
    background-color: #bee3f8;
}

.post-excerpt {
    font-size: 0.9rem;
    color: #4a5568;
    line-height: 1.5;
}

.no-posts {
    text-align: center;
    grid-column: 1 / -1;
    color: #718096;
}
</style>

<?php get_footer(); ?>