import styles from "./index.module.scss";
import TableItem from "../table-item";
import Table from "react-bootstrap/Table";

function StatisticTable() {
  const data = [
    {
      teamName: "SPARK PLUGS",
      team: [
        { id: "q1", valid: null },
        { id: "q2", valid: null },
        { id: "q3", valid: null },
        { id: "q4", valid: null },
        { id: "q5", valid: null },
      ],
    },
    {
      teamName: "PADAYOTTAM",
      team: [
        { id: "q1", valid: null },
        { id: "q2", valid: null },
        { id: "q3", valid: null },
        { id: "q4", valid: null },
        { id: "q5", valid: null },
      ],
    },
    {
      teamName: "CHAOS",
      team: [
        { id: "q1", valid: null },
        { id: "q2", valid: null },
        { id: "q3", valid: null },
        { id: "q4", valid: null },
        { id: "q5", valid: null },
      ],
    },
    {
      teamName: "TROUBLEMAKERS",
      team: [
        { id: "q1", valid: null },
        { id: "q2", valid: null },
        { id: "q3", valid: null },
        { id: "q4", valid: null },
        { id: "q5", valid: null },
      ],
    },
  ];
  return (
    <div className={styles.table}>
      <Table className={styles.table__wrapper} responsive>
        <tr>
          <th>Name</th>
          <th>Points</th>
          <th>Attempt</th>
        </tr>
        {data.map((item) => {
          return (
            <tr key={item.teamName}>
              <TableItem group_name={item.teamName} datas={item.team} />
            </tr>
          );
        })}
      </Table>
    </div>
  );
}

export default StatisticTable;
