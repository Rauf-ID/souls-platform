import React, { type JSX } from 'react';

interface SoulCardProps {
  name: string
  birthYear: number
  deathYear: number
}

const SoulCard: React.FC<SoulCardProps> = ({ 
    name,  birthYear, deathYear 
}): JSX.Element => {
    return (
        <div>
        <h2>{name}</h2>

        <p>
            {birthYear} - {deathYear}
        </p>
        </div>
    )
}

export default SoulCard;