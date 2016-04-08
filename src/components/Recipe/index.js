import { h, Component } from 'preact';
import style from './style';

export default class Recipe extends Component {
  render() {
    const { id, recipes, processRecipe } = this.props;

    let recipe = recipes.find((recipe) => recipe._id === id);
    console.log(recipe);

    let output;

    if (recipe) {
      output = (
      <div>
        <div class={style.info} style={{ background: recipe.color.style }}>
          <h1 class={style.name}>{recipe.name}</h1>
          <span class={style.author}>{recipe.author}</span>
        </div>
        <ul class={style.timeline}>
          {recipe.timeline.map((item) => (
            <li class={style.item}>
              <span class={style.description}>{item.description}</span>
              <time datetime={item.duration.raw}>{item.duration.pretty}</time>
            </li>
          ))}
        </ul>
      </div>
      );
    } else {
      output = <p>Loading...</p>;
    }

    return (
      <div class={style.recipe}>
        {output}
      </div>
    );
  }
}
