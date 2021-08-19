import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../styles/index.style';
import Vacancy from '../Components/vacancies/Vacancy';
import MainLayouts from '../Components/layouts/MainLayouts';
import FilterVacancies from '../Components/index/FilterVacancies';
import axios from 'axios';
import { IVacancy } from '../Components/Interfaces/IVacancy';
import { URL } from '../Components/utils/http/utils';
import nookies from 'nookies';
import { Box } from '@material-ui/core';
import Link from 'next/link';
import Resume from '../Components/resume/Resume';
import { IResume } from '../Components/Interfaces/IResume';

interface IHomeProps {
  AllResume: IResume[];
}

const FindResume: React.FC<IHomeProps> = ({ AllResume }) => {
  const [filter, setFilter] = React.useState<string>('');
  const classes = useStyles();

  const filterVacancies = React.useMemo(() => {
    return AllResume.filter((element: any) =>
      element.desiredPosition.toLowerCase().includes(filter.toLowerCase()),
    );
  }, [filter]);
  return (
    <MainLayouts>
      <div>
        <div className={classes.flex}>
          <FilterVacancies
            classes={classes}
            setFilter={setFilter}
            title={'Должность, которая вас интересует'}
          />
        </div>
        <Box display="flex">
          <Box margin="0 10px 0 0">
            <Link href="/FindVacancies">
              <a className={classes.textDecoration}>
                <Typography variant="h6" gutterBottom color="textSecondary">
                  Вакансии
                </Typography>
              </a>
            </Link>
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom>
              Резюме
            </Typography>
          </Box>
        </Box>

        {filterVacancies.map((element) => (
          <Resume id={element._id} resume={element} key={element._id} />
        ))}
      </div>
    </MainLayouts>
  );
};

export default FindResume;

export const getServerSideProps = async (ctx: any) => {
  const resumeData = await axios.get(`${URL}/resume`);
  return {
    props: {
      AllResume: resumeData.data,
    },
  };
};
