import "./home.css";

export function Home() {
  return (
    <div class="home">
      <section>
        <h1>Pokemon</h1>
        <b>Pokémon</b> (connue au Japon sous le nom de{" "}
        <b>
          <span class="lang-en" lang="en">
            Pocket Monsters
          </span>
        </b>
        ) est une{" "}
        <a href="/wiki/Franchise_(m%C3%A9dia)" title="Franchise (média)">
          franchise
        </a>{" "}
        créée par{" "}
        <a href="/wiki/Satoshi_Tajiri" title="Satoshi Tajiri">
          Satoshi Tajiri
        </a>{" "}
        en{" "}
        <a href="/wiki/1996_en_jeu_vid%C3%A9o" title="1996 en jeu vidéo">
          1996
        </a>
        , présente en particulier en{" "}
        <a href="/wiki/Jeu_vid%C3%A9o" title="Jeu vidéo">
          jeu vidéo
        </a>
        , dans des séries éditées par{" "}
        <a href="/wiki/Nintendo" title="Nintendo">
          Nintendo
        </a>
        . Selon les statistiques de Nintendo en{" "}
        <a href="/wiki/2010_en_jeu_vid%C3%A9o" title="2010 en jeu vidéo">
          2010
        </a>
        , les{" "}
        <a
          href="/wiki/Pok%C3%A9mon_(s%C3%A9rie_de_jeux_vid%C3%A9o)"
          title="Pokémon (série de jeux vidéo)"
        >
          jeux <i>Pokémon</i>
        </a>{" "}
        se sont vendus à environ 250&nbsp;millions d’unités. Le jeu vidéo{" "}
        <a
          href="/wiki/Pok%C3%A9mon_Rouge_et_Bleu"
          title="Pokémon Rouge et Bleu"
        >
          <i>Pokémon Rouge</i> et <i>Bleu</i>
        </a>{" "}
        s’est vendu à plus de 30&nbsp;millions d’exemplaires, ce qui en fait un
        record des ventes dans l’
        <a
          href="/wiki/Histoire_du_jeu_vid%C3%A9o"
          title="Histoire du jeu vidéo"
        >
          histoire du jeu vidéo
        </a>
        .
      </section>
      <section>
        <div>
          <h2>Liste des premiers pokemons</h2>
          <div class="column">
            <ul>
              <li>
                <a href="#1">Bulbizarre</a>
              </li>
              <li>
                <a href="#2">Herbizarre</a>
              </li>
              <li>
                <a href="#3">Florizarre</a>
              </li>
              <li>
                <a href="#4">Salamèche</a>
              </li>
              <li>
                <a href="#5">Reptincel</a>
              </li>
              <li>
                <a href="#6">Dracaufeu</a>
              </li>
            </ul>
            <div>
              <b>Pokémon</b> (connue au Japon sous le nom de{" "}
              <b>
                <span class="lang-en" lang="en">
                  Pocket Monsters
                </span>
              </b>
              ) est une{" "}
              <a href="/wiki/Franchise_(m%C3%A9dia)" title="Franchise (média)">
                franchise
              </a>{" "}
              créée par{" "}
              <a href="/wiki/Satoshi_Tajiri" title="Satoshi Tajiri">
                Satoshi Tajiri
              </a>{" "}
              en{" "}
              <a href="/wiki/1996_en_jeu_vid%C3%A9o" title="1996 en jeu vidéo">
                1996
              </a>
              , présente en particulier en{" "}
              <a href="/wiki/Jeu_vid%C3%A9o" title="Jeu vidéo">
                jeu vidéo
              </a>
              , dans des séries éditées par{" "}
              <a href="/wiki/Nintendo" title="Nintendo">
                Nintendo
              </a>
              . Selon les statistiques de Nintendo en{" "}
              <a href="/wiki/2010_en_jeu_vid%C3%A9o" title="2010 en jeu vidéo">
                2010
              </a>
              , les{" "}
              <a
                href="/wiki/Pok%C3%A9mon_(s%C3%A9rie_de_jeux_vid%C3%A9o)"
                title="Pokémon (série de jeux vidéo)"
              >
                jeux <i>Pokémon</i>
              </a>{" "}
              se sont vendus à environ 250&nbsp;millions d’unités. Le jeu vidéo{" "}
              <a
                href="/wiki/Pok%C3%A9mon_Rouge_et_Bleu"
                title="Pokémon Rouge et Bleu"
              >
                <i>Pokémon Rouge</i> et <i>Bleu</i>
              </a>{" "}
              s’est vendu à plus de 30&nbsp;millions d’exemplaires, ce qui en
              fait un record des ventes dans l’
              <a
                href="/wiki/Histoire_du_jeu_vid%C3%A9o"
                title="Histoire du jeu vidéo"
              >
                histoire du jeu vidéo
              </a>
              .
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2>S'inscrire à la newsletter</h2>
        <form>
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="john.doe@company.fr"
            />
          </label>
          <div class="button-newsletter">
            📬
            <button type="submit">S'inscrire</button>
          </div>
        </form>
      </section>
    </div>
  );
}
