import { useNetwork } from "./useNetwork";

const ChatInterFace = () => {
  const { data, loading, error } = useNetwork("url_goes_here");
  if (loading) return <div>Loading</div>;
  if (error) return <div>Error in fetching the url</div>;
  return (
    <>
      <ul>
        {data.map((iceCream) => (
          <li key={iceCream.id}>{iceCream.name}</li>
        ))}
      </ul>
    </>
  );
};

export default ChatInterFace;
