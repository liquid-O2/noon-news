import Navbar from '../components/navbar';
import { NewPosts } from '../components/newposts';
const NewPostz = () => {
  return (
    <div>
      <Navbar active='new' />
      <NewPosts />
    </div>
  );
};

export default NewPostz;
