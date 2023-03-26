import tw from 'twin.macro';
import Landing from './views/Landing';
// import Spire from './views/Spire';

const Container = tw.div`h-screen w-screen bg-gradient-to-b from-gray-400 to-gray-600 flex flex-col justify-center items-center text-center overflow-hidden px-1`;

function App() {
  return (
    <Container>
      <Landing />
      {/* <Spire /> */}
    </Container>
  );
}

export default App;
