import { profile } from '../data/profile';

function HomePage() {
  return (
    <div>
      <h1>{profile.firstName} {profile.lastName}</h1>
      <h2>{profile.educationTitle}</h2>
      <p>{profile.description}</p>

      <section>
        <h3>Contact</h3>
        <p>Email: {profile.email}</p>
        <p>Phone: {profile.phoneNumber}</p>
        <p>Address: {profile.homeAddress}</p>
        <p>
          <a href={profile.linkedin}>LinkedIn</a> · <a href={profile.github}>GitHub</a>
        </p>
      </section>

      <section>
        <h3>Technologies</h3>
      </section>
    </div>
  );
}

export default HomePage;