import {
  LinkButton,
  MainButton,
  PrimaryButton,
} from "../../../styles/ui-componets/button";

const ButtonPreview = () => {
  return (
    <div className="flex flex-col gap-8 px-8">
      <h1 className="text-2xl uppercase">Button Preview</h1>
      <section>
        <PrimaryButton onClick={(event) => alert("Primary Clicked!")}>
          Primary
        </PrimaryButton>
        <MainButton>Main</MainButton>
        <LinkButton>Link</LinkButton>
      </section>
    </div>
  );
};

export default ButtonPreview;
