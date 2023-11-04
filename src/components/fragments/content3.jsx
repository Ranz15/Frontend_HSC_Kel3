import Third_Content from "../elements/button/buttonContent3";

const Content_3 = () => {
  return (
    <>
      <div className="w-[53.75rem] bg-slate-100 my-9">
        <h1 className="flex justify-center items-center pt-2">
          Trending Categories
        </h1>
        <div className="flex justify-center items-center gap-3 mt-2">
          <div className="flex gap-4 pb-3">
            <Third_Content
              destination="#"
              imglink="../../../public/assets/images/[2]_Content/Content_3_Carosel_1.jpeg"
              title="Carosel_1"
              category="Ladies"
              message="Dresses"
            />
            <Third_Content
              destination="#"
              imglink="../../../public/assets/images/[2]_Content/Content_3_Carosel_2.jpeg"
              title="Carosel_2"
              category="Best Men"
              message="Trendy"
            />
            <Third_Content
              destination="#"
              imglink="../../../public/assets/images/[2]_Content/Content_3_Carosel_3.jpeg"
              title="Carosel_3"
              category="Divided"
              message="From Rp 99.000"
            />
            <Third_Content
              destination="#"
              imglink="../../../public/assets/images/[2]_Content/Content_3_Carosel_4.jpeg"
              title="Carosel_4"
              category="Music"
              message="Festival Ready"
            />
            <Third_Content
              destination="#"
              imglink="../../../public/assets/images/[2]_Content/Content_3_Carosel_5.jpeg"
              title="Carosel_5"
              category="Divided"
              message="90 Style"
            />
            <Third_Content
              destination="#"
              imglink="../../../public/assets/images/[2]_Content/Content_3_Carosel_6.jpeg"
              title="Carosel_6"
              category="Kids"
              message="From Rp 249.900"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Content_3;
