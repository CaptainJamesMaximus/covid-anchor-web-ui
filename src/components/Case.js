function Case({ caseData }) {
  return (
    <div className="case">
      <h2>{caseData.country}</h2>
      <p>Total Cases:{caseData.case} </p>
      <p style={{color:"crimson"}}>Active Cases:{caseData.active} </p>
      <p style={{color:"green"}}>Recovered Cases:{caseData.recovered} </p>
      <p style={{color:"red"}}>Deaths:{caseData.deaths} </p>

      {/* STYLING */}
      <style jsx>{`
        .case {
          height: 20rem;
          padding: 3rem;
          background-color: var(--color-primary);
        }
      `}</style>
    </div>
  );
}

export default Case;
