
// import React from "react";
// import { useState, useEffect } from "react";
// import ProjectCard from "../components/Card";
// import Styled, { useTheme } from "styled-components";
// import ProjectStatCard from "../components/ProjectStatCard";
// import { Add } from "@mui/icons-material";
// import CircularProgress, {
//   CircularProgressProps,
// } from '@mui/material/CircularProgress';
// import { useSelector } from "react-redux";
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import { LinearProgress } from "@mui/material";
// import { statuses, data, tagColors } from "../data/data";
// import { useDispatch } from "react-redux";
// import { openSnackbar } from "../redux/snackbarSlice";
// import { getProjects, userTasks } from "../api";
// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

// const Container = Styled.div`
// @media screen and (max-width: 480px) {
//   padding: 10px 10px;
// }
// `;

// const Section = Styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: start;
// `;

// const Left = Styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: start;
//   gap: 20px;
//   flex: 1.4;
// `;

// const Right = Styled.div`
//   width: 100%;
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   justify-content: start;
//   gap: 20px;
// `;

// const TopBar = Styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: end;
//   gap: 16px;
//   margin: 20px 0px;
// `;

// const CreateButton = Styled.div`
//   padding: 20px 30px;
//   text-align: left;
//   font-size: 16px;
//   font-weight: 800;
//   color: ${({ theme }) => theme.text};
//   border-radius: 12px;
//   background: linear-gradient(76.35deg, #801AE6 15.89%, #A21AE6 89.75%);
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   cursor: pointer;
//   transition: all 0.5s ease;
//   &:hover {
//     background: linear-gradient(76.35deg, #801AE6 15.89%, #A21AE6 89.75%);
//     box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
//   }
//   gap: 14px;

  // ${({ btn }) =>
  //   btn === "team" &&
  //   `
  //   background: linear-gradient(76.35deg, #FFC107 15.89%, #FFC107 89.75%);
  //   &:hover {
  //     background: linear-gradient(76.35deg, #FFC107 15.89%, #FFC107 89.75%);
  //     box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  //   }
  // `}
// `;

// const Icon = Styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   background: ${({ theme }) => theme.text};
//   color: ${({ theme }) => theme.primary};
//   border-radius: 50%;
//   padding: 4px;
// `;

// const StatsWrapper = Styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, minmax(250px, 1fr));
//   grid-gap: 24px;
//   margin: 20px 0px;
// `;

// const StatCard = Styled.div`
//   width: 100%;
//   height: 100%;
//   padding: 4px;
//   text-align: left;
//   margin: 2px;
//   font-size: 18px;
//   font-weight: 500;
//   color: ${({ theme }) => theme.text};
//   border-radius: 12px;
//   background-color: ${({ theme }) => theme.card};
//   box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.20);
//   transition: all 0.5s ease;
//   &:hover {
//     box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
//   }
// `;

// const RecentProjects = Styled.div`
//   width: 100%;
//   height: 100%;
//   text-align: left;
//   margin: 2px;
//   font-size: 18px;
//   font-weight: 500;
//   color: ${({ theme }) => theme.text};
//   border-radius: 12px;
// `;

// const SectionTitle = Styled.div` 
//   width: 100%;
//   padding: 0px 12px;
//   font-size: 22px;
//   font-weight: 600;
//   margin: 10px 0px 16px 0px;
//   color: ${({ theme }) => theme.text};
// `;

// const RecentProjectsWrapper = Styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: start;
//   gap: 20px;
// `;


// const Teams = Styled.div`
//   width: 100%;
// `;

// const TotalProjects = Styled.div` 
//   width: 100%;
//   padding: 8px 12px;
// `;

// const TaskCompleted = Styled.div` 
//   width: 100%;
//   padding: 8px 12px;
// `;

// const Progress = Styled.div`
//   width: 90%;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   gap: 8px;
//   padding: 10px 0px 0 0;
// `;

// const ProgressText = Styled.div`
//   font-size: 28px;
//   font-weight: 600;
//   color: ${({ theme }) => theme.text};
// `;

// const Desc = Styled.div`
//   font-size: 12px;
//   font-weight: 500;
//   padding: 0px 4px;
//   line-spacing: 1.5;
//   font-size: 13px;
//   color: ${({ theme }) => theme.soft2};
// `;

// const TotalWorks = Styled.div`
//   width: 100%;
//   padding: 8px 12px;
// `;

// const Title = Styled.div`
//   width: 100%;
//   height: 100%;
//   text-align: left;
//   margin: 2px;
//   font-size: 18px;
//   font-weight: 600;
//   color: ${({ theme }) => theme.text};
// `;

// const Span = Styled.span`
//   font-weight: 600;
//   font-size: 16px;
//   color: ${({ theme }) => theme.primary};
// `;

// const CardWrapper = Styled.div`
// padding: 12px 0px;
// display: grid;
// grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
// grid-gap: 8px;
// `;

// const Tasks = Styled.div`
//   width: 100%;
//   padding: 4px;
//   text-align: left;
//   margin: 2px;
//   font-size: 16px;
//   font-weight: 500;
//   color: ${({ theme }) => theme.text};
//   border-radius: 12px;
//   background-color: ${({ theme }) => theme.card};
// `;

// const TaskCardWrapper = Styled.div`
//   padding: 12px 0px;
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//   grid-gap: 8px;
// `;

// function CircularProgressWithLabel(props
// ) {
//   const theme = useTheme();
//   return (
//     <Box sx={{ position: 'relative', display: 'inline-flex' }}>
//       <CircularProgress variant="determinate" {...props} thickness={6} size="60px" style={{ color: theme.primary }} />
//       <Box
//         sx={{
//           top: 0,
//           left: 0,
//           bottom: 0,
//           right: 0,
//           position: 'absolute',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         <Typography
//           variant="caption"
//           component="div"
//           color="inherit"
//         >{`${Math.round(props.value)}`}</Typography>
//       </Box>
//     </Box>
//   );
// }

// // backgroundColor: 'lightyellow',
// // '& .MuiLinearProgress-bar': {
// //   backgroundColor: 'orange'
// // }

// const Dashboard = ({ setNewProject, setNewTeam, newProject }) => {

//   const dispatch = useDispatch();
//   const [projects, setProjects] = useState([]);
//   const [tasks, setTasks] = useState([]);
//   const [totalProjectsDone, setTotalProjectsDone] = useState(0);
//   const [totalProjects, setTotalProjects] = useState(0);
//   const [totalTasks, setTotalTasks] = useState(0);
//   const [totalTasksDone, setTotalTasksDone] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const { currentUser } = useSelector((state) => state.user);


//   const token = localStorage.getItem("token");
//   const getprojects = async () => {
//     setLoading(true);
//     await getProjects(token)
//       .then((res) => {
//         setProjects(res.data);
//         getTotalProjectsDone();
//       })
//       .catch((err) => {
//         setLoading(false);
//         dispatch(
//           openSnackbar({
//             message: err.response.data.message,
//             severity: "error",
//           })
//         );
//       });
//   };

//   const getTotalProjectsDone = () => {
//     setTotalProjectsDone(projects.filter((project) => project.status.toString().toLowerCase() === "completed").length);
//     setTotalProjects(projects.length);
//   };

//   const getTasks = async () => {
//     setLoading(true);
//     await userTasks(token)
//       .then((res) => {
//         setTasks(res.data);
//         getTotalTasks();
//         setLoading(false);
//       })
//       .catch((err) => {
//         dispatch(
//           openSnackbar({
//             message: err.response.data.message,
//             severity: "error",
//           })
//         );
//         setLoading(false);
//       });
//   };

//   const getTotalTasks = async () => {
//     setTotalTasks(tasks.length);
//     setTotalTasksDone(tasks.filter((task) => task.status.toString().toLowerCase() === "completed").length);
//   }

//   useEffect(() => {
//     getprojects();
//     getTasks();
//     window.scrollTo(0, 0);
//   }, [newProject]);


//   return (
//     <Container>
//       {loading ? (
//         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '12px 0px', height: '300px' }}>
//           <CircularProgress />
//         </div>
//       ) : (
//         <Section>
//           <Left>
//             <StatsWrapper>
//               <StatCard>
//                 <TotalProjects>
//                   <Title>Total Projects Done</Title>
//                   <Progress>
//                     <LinearProgress
//                       sx={{
//                         borderRadius: "10px", height: 7, width: "80%"
//                       }}
//                       variant="determinate"
//                       value={
//                         totalProjectsDone === 0
//                           ? 0
//                           : (totalProjectsDone / totalProjects) * 100
//                       }
//                     />
//                     <ProgressText>{totalProjectsDone.toString()}</ProgressText>
//                   </Progress>
//                   <Desc>Working on&nbsp;
//                     <Span> {(totalProjects - totalProjectsDone).toString()} </Span>
//                     &nbsp;projects</Desc>
//                 </TotalProjects>
//               </StatCard>

//               <StatCard>
//                 <TaskCompleted>
//                   <Title>Total Task Done</Title>
//                   <Progress>
//                     <LinearProgress
//                       sx={{ borderRadius: "10px", height: 7, width: "80%" }}
//                       variant="determinate"
//                       value={
//                         totalTasksDone === 0
//                           ? 0
//                           : (totalTasksDone / totalTasks) * 100
//                       }
//                       color={"success"}
//                     />
//                     <ProgressText>{totalTasksDone}</ProgressText>
//                   </Progress>
//                   <Desc><Span>{totalTasks - totalTasksDone}</Span> &nbsp;Tasks are left</Desc>
//                 </TaskCompleted>
//               </StatCard>

//               {/* <StatCard>
//     <TotalWorks>
//       <Title>Total Works Done</Title>
//     </TotalWorks>
//   </StatCard> */}
//             </StatsWrapper>

//             <RecentProjects>
//               <SectionTitle>Recent Projects</SectionTitle>
//               <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}>
//                 <Masonry gutter="0px 16px">
//                   {
//                     projects
//                       .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
//                       .filter((item, index) => index < 6)
//                       .map((project, id) => (
//                         <ProjectCard
//                           key={project._id}
//                           item={project}
//                           index={id}
//                           status={project.status}
//                           tagColor={tagColors[3]}
//                         />
//                       ))
//                   }
//                 </Masonry>
//               </ResponsiveMasonry>
//             </RecentProjects>

//           </Left>
//           <Right>

//             <TopBar>
//               <CreateButton onClick={() => setNewProject(true)}>
//                 <Icon>
//                   <Add style={{ color: 'inherit' }} />
//                 </Icon>
//                 Create New Project
//               </CreateButton>
//               <CreateButton btn="team" onClick={() => setNewTeam(true)}>
//                 <Icon>
//                   <Add style={{ color: '#FFC107' }} />
//                 </Icon>
//                 Create New Team
//               </CreateButton>
//             </TopBar>
//           </Right>
//         </Section>
//       )}
//     </Container >
//   );
// };

// export default Dashboard;


import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openSnackbar } from "../redux/snackbarSlice";
import { getProjects, userTasks } from "../api";
import ProjectCard from "../components/Card";
import Styled from "styled-components";
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { LinearProgress } from "@mui/material";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Add } from "@mui/icons-material";

const Container = Styled.div`
  padding: 20px;

  @media (min-width: 1300px) {
    padding: 20px;
  }
`;

const Section = Styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 1300px) {
    flex-direction: row;
  }
`;

const Left = Styled.div`
  width: 100%;

  @media (min-width: 1300px) {
    width: 60%;
  }
`;

const Right = Styled.div`
  width: 100%;
  margin-top: 20px;
  @media (min-width: 1300px) {
    width: 40%;
    margin-top: 50px;
  }
`;

const TopBar = Styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 20px;

  @media (min-width: 1300px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const CreateButton = Styled.div`
  padding: 20px 30px;
  text-align: left;
  font-size: 16px;
  font-weight: 800;
  color: ${({ theme }) => theme.text};
  border-radius: 12px;
  background: linear-gradient(76.35deg, #801AE6 15.89%, #A21AE6 89.75%);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background: linear-gradient(76.35deg, #FFC107 15.89%, #FFC107 89.75%);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  }
  ${({ btn }) =>
    btn === "team" &&
    `
    background: linear-gradient(76.35deg, #801AE6 15.89%, #A21AE6 89.75%);
    &:hover {
      background: linear-gradient(76.35deg, #FFC107 15.89%, #FFC107 89.75%);
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
    }
  `}
  @media (min-width: 1300px) {
    margin-bottom: 0;
  }
`;

const Icon = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.iconBackground};
  color: ${({ theme }) => theme.iconColor};
  border-radius: 50%;
  padding: 4px;
`;

const StatsWrapper = Styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 24px;
  margin: 20px 0px;
`;

const StatCard = Styled.div`
  padding: 20px;
  text-align: left;
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.card};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.20);
  transition: all 0.5s ease;
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  }
`;

const RecentProjects = Styled.div`
  text-align: left;
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  border-radius: 12px;
`;

const SectionTitle = Styled.div` 
  padding: 0px 12px;
  font-size: 22px;
  font-weight: 600;
  margin: 30px 0px 5px 0px;
  color: ${({ theme }) => theme.text};
`;

const CardWrapper = Styled.div`
  padding: 12px 0px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 8px;
`;
const Teams = Styled.div`
  width: 100%;
`;

const TotalProjects = Styled.div` 
  width: 100%;
  padding: 8px 12px;
`;

const TaskCompleted = Styled.div` 
  width: 100%;
  padding: 8px 12px;
`;

const Progress = Styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding: 10px 0px 0 0;
`;

const ProgressText = Styled.div`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;

const Desc = Styled.div`
  font-size: 12px;
  font-weight: 500;
  padding: 0px 4px;
  line-spacing: 1.5;
  font-size: 13px;
  color: ${({ theme }) => theme.soft2};
`;

const TotalWorks = Styled.div`
  width: 100%;
  padding: 8px 12px;
`;

const Title = Styled.div`
  width: 100%;
  height: 100%;
  text-align: left;
  margin: 2px;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;

const Span = Styled.span`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
`;

// const CardWrapper = Styled.div`
// padding: 12px 0px;
// display: grid;
// grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
// grid-gap: 8px;
// `;
function Dashboard({ setNewProject, setNewTeam, newProject }) {
  const dispatch = useDispatch();
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [totalProjectsDone, setTotalProjectsDone] = useState(0);
  const [totalProjects, setTotalProjects] = useState(0);
  const [totalTasks, setTotalTasks] = useState(0);
  const [totalTasksDone, setTotalTasksDone] = useState(0);
  const [loading, setLoading] = useState(true);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      setLoading(true);
      try {
        const projectsRes = await getProjects(token);
        setProjects(projectsRes.data);
        const tasksRes = await userTasks(token);
        setTasks(tasksRes.data);
        getTotalProjectsDone(projectsRes.data);
        getTotalTasks(tasksRes.data);
      } catch (error) {
        dispatch(openSnackbar({
          message: error.response.data.message,
          severity: "error",
        }));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    window.scrollTo(0, 0);
  }, [newProject]);

  const getTotalProjectsDone = (projects) => {
    setTotalProjects(projects.length);
    setTotalProjectsDone(projects.filter((project) => project.status.toLowerCase() === "completed").length);
  };

  const getTotalTasks = (tasks) => {
    setTotalTasks(tasks.length);
    setTotalTasksDone(tasks.filter((task) => task.status.toLowerCase() === "completed").length);
  };

  return (
    <Container>
      {loading ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '12px 0px', height: '300px' }}>
          <CircularProgress />
        </div>
      ) : (
        <Section>
          <Left>
            <StatsWrapper>
              <StatCard>
                <TotalProjects>                  
                  <Title>Total Projects Done</Title>                  
                    <Progress>
                      <LinearProgress
                            sx={{
                              borderRadius: "10px", height: 7, width: "80%"
                            }}
                            variant="determinate"
                            value={
                              totalProjectsDone === 0
                                ? 0
                                : (totalProjectsDone / totalProjects) * 100
                            }
                          />
                      <ProgressText>{totalProjectsDone.toString()}</ProgressText>
                    </Progress>
                    <Desc>Working on&nbsp;
                    <Span> {(totalProjects - totalProjectsDone).toString()} </Span>
                    &nbsp;projects</Desc>
                </TotalProjects>
              </StatCard>

              <StatCard>
              <TaskCompleted>
                  <Title>Total Task Done</Title>
                  <Progress>
                    <LinearProgress
                      sx={{ borderRadius: "10px", height: 7, width: "80%" }}
                      variant="determinate"
                      value={
                        totalTasksDone === 0
                          ? 0
                          : (totalTasksDone / totalTasks) * 100
                      }
                      color={"success"}
                    />
                    <ProgressText>{totalTasksDone}</ProgressText>
                  </Progress>
                  <Desc><Span>{totalTasks - totalTasksDone}</Span> &nbsp;Tasks are left</Desc>
                </TaskCompleted>
              </StatCard>
            </StatsWrapper>

            <RecentProjects>
              <SectionTitle>Recent Projects</SectionTitle>
              <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}>
                <Masonry gutter="0px 16px">
                  {projects
                    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
                    .slice(0, 6)
                    .map((project) => (
                      <ProjectCard
                        key={project._id}
                        item={project}
                        status={project.status}
                        tagColor={"#FFC107"} // Change this to the appropriate tag color
                      />
                    ))}
                </Masonry>
              </ResponsiveMasonry>
            </RecentProjects>
          </Left>

          <Right>
            <TopBar>
              <CreateButton onClick={() => setNewProject(true)}>
                <Icon><Add style={{ color: '#FFC107' }} /></Icon>
                Create New Project
              </CreateButton>
              <CreateButton btn="team" onClick={() => setNewTeam(true)}>
                <Icon><Add  style={{ color: 'inherit' }} /></Icon>
                Create New Team
              </CreateButton>
            </TopBar>
          </Right>
        </Section>
      )}
    </Container>
  );
}

export default Dashboard;
