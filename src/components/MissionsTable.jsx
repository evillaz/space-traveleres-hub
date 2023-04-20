import MissionsList from './MissionsList';
import '../styles/style.css';

const MissionsTable = () => {
  const head = ['Mission', 'Description', 'Status', ''];
  return (
    <table>
      <thead>
        <tr>
          {head.map((title) => (
            <th key={title}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <MissionsList />
      </tbody>
    </table>
  );
};

export default MissionsTable;
