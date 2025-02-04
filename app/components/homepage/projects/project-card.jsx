// @flow strict

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function ProjectCard({ project }) {

  return (
        <div className='h-full'>
        <Image
          src={project.profile}
          alt="Hero"
          width={1900}
          height={400}
          className='h-full max-h-120 object-contain lg:object-cover'
        />
        </div>
  );
};

export default ProjectCard;