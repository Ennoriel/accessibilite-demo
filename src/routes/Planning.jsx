export function Planning() {
  return (
    <section>
      <h1>Programme Accessibilité</h1>
      <h2>Navigation au clavier</h2>
      <ol>
        {[
          "hover = zone d’action (:hover)",
          "hover = action = focus (:focus)",
          "liens, boutons",
          "styliser une carte",
          "pièges (action action, zone d'action, déplacement d'une section, input type submit)",
        ].map((programItem) => (
          <li>{programItem}</li>
        ))}
      </ol>
      <h2>Navigation générale & mise en page</h2>
      <ol>
        {[
          "nav",
          "title",
          "sémantique globale (article, section, etc.)",
          "liens d’évitement",
          "ordre logique",
          "zones par page",
          "aération du texte",
        ].map((programItem) => (
          <li>{programItem}</li>
        ))}
      </ol>
      <h2>Contenu textuel</h2>
      <h2>Contenu non-textuel</h2>
      <h2>Couleurs et contrastes</h2>
      <h2>Formulaires</h2>
      <h2>Tactile et interactions</h2>
      <h2>Aides techniques</h2>
    </section>
  );
}
