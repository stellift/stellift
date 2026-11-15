export const slugs = {
  "pt-BR": "gerador-de-lorem-ipsum",
  en: "lorem-ipsum-generator",
};

const opening = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";

const vocabulary = (
  "a ac accumsan adipiscing aenean aliquam aliquet amet ante arcu at auctor augue bibendum " +
  "blandit commodo condimentum congue consectetur consequat convallis cras curabitur cursus " +
  "dapibus diam dictum dignissim dolor donec dui duis egestas eget eleifend elementum elit enim " +
  "erat eros est et etiam eu euismod facilisis faucibus felis fermentum feugiat finibus fringilla " +
  "fusce gravida hendrerit iaculis id imperdiet in integer interdum ipsum justo lacinia lacus " +
  "laoreet lectus leo libero ligula lobortis lorem luctus maecenas magna malesuada massa mattis " +
  "mauris maximus metus mi molestie mollis morbi nam nec neque nibh nisi nisl non nulla nullam " +
  "nunc odio orci ornare pellentesque pharetra phasellus placerat porta porttitor posuere " +
  "praesent pretium proin pulvinar purus quam quis quisque rhoncus risus rutrum sagittis sapien " +
  "scelerisque sed sem semper sit sodales sollicitudin suscipit suspendisse tellus tempor " +
  "tempus tincidunt tortor tristique turpis ullamcorper ultrices ultricies urna ut varius vel " +
  "velit vestibulum vitae vivamus viverra volutpat vulputate"
).split(" ");

function between(min: number, max: number, random: () => number) {
  return min + Math.floor(random() * (max - min + 1));
}

function sentence(random: () => number) {
  const length = between(6, 14, random);
  const chosen = Array.from({ length }, () => vocabulary[Math.floor(random() * vocabulary.length)]);
  if (length > 9) chosen[between(3, length - 4, random)] += ",";
  const text = chosen.join(" ");
  return text.charAt(0).toUpperCase() + text.slice(1) + ".";
}

export function generateLorem(paragraphs: number, classicStart: boolean, random = Math.random) {
  return Array.from({ length: paragraphs }, (_, p) => {
    const sentences = Array.from({ length: between(4, 7, random) }, () => sentence(random));
    if (p === 0 && classicStart) sentences[0] = `${opening}.`;
    return sentences.join(" ");
  }).join("\n\n");
}
