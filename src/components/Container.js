const Container = ({ children, className }) => {
    return (
      <div className={`w-full max-w-[1200px] m-auto px-6 ${className}`}>
        {children}
      </div>
    );
};
  
export default Container;

export const options = ["Using Media Type", "Using Query", "Using Description", "Using Keywords"];
export const optionsKey = ["mediaType", "q", "description", "keyword"];
  