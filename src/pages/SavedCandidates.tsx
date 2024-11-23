import { useState, useEffect } from 'react';
import type GithubUser from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<GithubUser[]>([]);

  useEffect(() => {
    const storedCandidates = localStorage.getItem('newCandidate');
    if (storedCandidates) {
      setSavedCandidates(JSON.parse(storedCandidates));
    }
  }, []);

  const removeCandidate = (login: string) => {
    const updatedCandidates = savedCandidates.filter(candidate => candidate.login !== login);

    setSavedCandidates(updatedCandidates);

    localStorage.setItem('newCandidate', JSON.stringify(updatedCandidates));
  };


  return (
    <>
      <h1>Potential Candidates</h1>
      {savedCandidates.length === 0 ? (
        <p>No candidates saved yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Name</th>
              <th>Username</th>
              <th>Company</th>
              <th>Bio</th>
              <th>Location</th>
              <th>Email</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {savedCandidates.map((candidate, index) => (
              <tr key={index}>
                <td>
                  <img src={candidate.avatar_url} alt={candidate.login} width={50} />
                </td>
                <td>{candidate.name || 'No Name Available'}</td>
                <td>{candidate.login}</td>
                <td>{candidate.company || 'Not Provided'}</td>
                <td>{candidate.bio || 'No bio available'}</td>
                <td>{candidate.location || 'Not Provided'}</td>
                <td>{candidate.email || 'Not Provided'}</td>
                <td>
                  <button onClick={() => removeCandidate(candidate.login)}>LAME</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default SavedCandidates;
