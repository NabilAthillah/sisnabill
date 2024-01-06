import Image from "next/image";
import Chart from "./Chart";

const MainDashboard = ({datas}) => {
  return (
    <div className="flex flex-col gap-10">
      <p className="cursor-default text-[#138f2e] font-extrabold text-3xl">
        Smart Irrigation System
      </p>
      <div className="w-full flex justify-center gap-10">
        <div className="bg-[#FFB783] flex px-6 py-3 rounded-[20px] justify-between w-[250px] min-h-[130px]">
          <div className="flex flex-col justify-between">
            <p className="text-white font-roboto font-semibold capitalize">
              Kelembaban
              <br />
              Tanah
            </p>
            {datas.length > 0 && (
              <p
                key={datas[datas.length - 1].id}
                className="text-white font-roboto text-4xl font-extrabold"
              >
                {datas[datas.length - 1].moist}
              </p>
            )}
          </div>
          <div>
            <Image
              src={"/assets/Group9.png"}
              alt=""
              width={40}
              height={40}
              className="h-auto"
            />
          </div>
        </div>
        <div className="bg-[#B4D2FF] flex px-6 py-3 rounded-[20px] justify-between w-[250px] min-h-[130px]">
          <div className="flex flex-col justify-between">
            <p className="text-white font-roboto font-semibold capitalize">
              Kelembaban Udara
            </p>
            {datas.length > 0 && (
              <p
                key={datas[datas.length - 1].id}
                className="text-white font-roboto text-4xl font-extrabold"
              >
                {datas[datas.length - 1].humidity}%
              </p>
            )}
          </div>
          <div>
            <Image
              src={"/assets/Group10.png"}
              alt=""
              width={40}
              height={40}
              className="h-auto"
            />
          </div>
        </div>
        <div className="bg-[#FED37F] flex px-6 py-3 rounded-[20px] justify-between w-[250px] min-h-[130px]">
          <div className="flex flex-col justify-between">
            <p className="text-white font-roboto font-semibold capitalize">
              Suhu Udara
            </p>
            {datas.length > 0 && (
              <p
                key={datas[datas.length - 1].id}
                className="text-white font-roboto text-4xl font-extrabold"
              >
                {datas[datas.length - 1].temperature}&deg;C
              </p>
            )}
          </div>
          <div>
            <Image
              src={"/assets/Group11.png"}
              alt=""
              width={40}
              height={40}
              className="h-auto"
            />
          </div>
        </div>
      </div>
      <div>
        <Chart datas={datas}/>
      </div>
    </div>
  );
};

export default MainDashboard;
