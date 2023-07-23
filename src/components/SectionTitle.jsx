/* eslint-disable react/prop-types */

const SectionTitle = ({title,splTitle}) => {
    return (
        <div className="relative">
            <h2 className="text-4xl font-semibold text-center">
                {title}
                <span className="font-normal ml-3 logo_font text-[#575fcf]">
                    {splTitle}
                </span>
            </h2>
            <div className="absolute w-28 h-1 bg-[#3c40c6] -bottom-5 left-1/2 -translate-x-1/2"></div>
        </div>
    );
};

export default SectionTitle;
