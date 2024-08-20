import { useEffect } from 'react';
import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import { userState } from '../atoms/userState';


const ProfileLoader = () => {
  const setUser = useSetRecoilState(userState);

  useEffect(() => {
    axios.get('/profile', { withCredentials: true })
      .then(({ data }) => {
        setUser(data);
      })
      .catch(error => {
        console.error('Error fetching profile:', error);
        setUser(null);
      });
  }, [setUser]);

  return null; 
};

export default ProfileLoader