import React, { ReactNode } from "react";

type CardProps = {
 title: string;
 description: string;
 icon?: ReactNode;
 href?: string;
};
const Card = ({
 title = "websuckit",
 description = "websuckit",
 icon,
 href = "#"
}: CardProps) => {
 return (
  <article>
   <a href={href} style={{ textDecoration: "none" }}>
    <div className="card">
     <div className="text--truncate">
      <div style={{ display: "flex", alignItems: "self-end", gap: "8px" }}>
       {icon ? <span title={title}>{icon}</span> : ""}
       <h2 className="text--truncate" title={title}>
        {title}
       </h2>
      </div>
     </div>
     <p className="text--truncate">{description}</p>
    </div>
   </a>
  </article>
 );
};

export default Card;
