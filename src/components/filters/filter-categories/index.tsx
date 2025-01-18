import Checkbox from "../../general/checkbox";

export default function FilterCategories() {
  return (
    <>
      <h2>دسته بندی </h2>
      <ul>
        <li>
          <Checkbox name="category" value="mobile" label="گوشی" />
        </li>
        <li>
          <Checkbox name="category" value="tablet" label="تبلت" />
        </li>
        <li>
          <Checkbox name="category" value="accessories" label="لوازم جانبی" />
        </li>
        <li>
          <Checkbox name="category" value="watch" label="ساعت" />
        </li>
        <li>
          <Checkbox name="category" value="laptop" label="لپتاپ" />
        </li>
      </ul>
    </>
  );
}
