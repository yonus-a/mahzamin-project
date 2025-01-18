import Checkbox from "../../general/checkbox";

export default function FilterBrands() {
  return (
    <>
      <h2>برند </h2>
      <ul>
        <li>
          <Checkbox name="brand" value="sony" label="Sony" />
        </li>
        <li>
          <Checkbox name="brand" value="huawei" label="Huawei" />
        </li>
        <li>
          <Checkbox name="brand" value="samsung" label="Samsung" />
        </li>
        <li>
          <Checkbox name="brand" value="xiaomi" label="Xiaomi" />
        </li>
        <li>
          <Checkbox name="brand" value="onePlus" label="OnePlus" />
        </li>
      </ul>
    </>
  );
}
