import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import GithubUser from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<GithubUser>({
    login: '',
    avatar_url: '',
    company: '',
    bio: '',
    name: '',
    location: '',
    email: '',
  });

  const searchRandomCandidate = async ()=> {
    const users = await searchGithub();
    if (users.length > 0) {
      const randomUser = users[Math.floor(Math.random() * users.length)];
      const userDetails = await searchGithubUser(randomUser.login);
      setCandidate(userDetails);
    }};

  useEffect(() => {
    searchRandomCandidate();
  }, []);

  return (
    <section>
       <div>
          <h2>{candidate.name || 'No Name Available'}</h2>
          <img src={candidate.avatar_url} alt={candidate.login} width={150} />
          <p><strong>Username:</strong> {candidate.login}</p>
          <p><strong>Company:</strong> {candidate.company || 'Not Provided'}</p>
          <p><strong>Bio:</strong> {candidate.bio || 'No bio available'}</p>
          <p><strong>Location:</strong> {candidate.location || 'Not Provided'}</p>
          <p><strong>Email:</strong> {candidate.email || 'Not Provided'}</p>
        </div>
      <button onClick={searchRandomCandidate}>Search Another Candidate</button>

    </section>
  );
};

export default CandidateSearch;
