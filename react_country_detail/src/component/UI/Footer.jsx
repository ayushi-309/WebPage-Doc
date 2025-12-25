import footerContact from "../../api/footerApi.json";

export const Footers = () => {
  return (
    <footer className="footer-section">
      <div className="container grid grid-three-cols">

        {
            footerContact.map((curData, index) => {
              return 
            })
        }

      </div>

    </footer>
  )
};