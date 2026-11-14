function ProfileCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Speciality: {props.speciality}</p>
      <p>{props.description}</p>
    </div>
  );
}
export default ProfileCard;