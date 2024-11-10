import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Tools/navebar';
import Transfer from './components/Operations/Transfer';
import Client from './components/Client/Client';
import Account from './components/Compte/Account';
import Employee from './components/Employe/Employee';
import Group from './components/Groupe/Group';
import Withdraw from './components/Operations/Withdraw';
import Deposit from './components/Operations/Deposit';
import OperationsList from './components/Operations/OperationsList'; // Import the OperationsList component

import 'bootstrap/dist/css/bootstrap.min.css';
import GroupForm from './components/Groupe/AddGroup';
import AddEmploye from './components/Employe/AddEmploye';
import AssignEmployeToGroupe from './components/Groupe/ADDEMP2GRP';
import CompteForm from './components/Compte/AddCompte';
import OneCompte from './components/Compte/OneCompte';
import CompteClient from './components/Client/CompteClient';
import CompteOne from './components/Compte/CompteOne';
import EmpGrp from './components/Employe/EmpGrp';
import CreateClient from './components/Client/AddClient';
const App = () => {
    return (
        <Router>
            <div className="container">
                <Navbar />
                <div className="mt-4">
                    <Routes>
                        <Route path="/retirer" element={<Withdraw />} />
                        <Route path="/deposer" element={<Deposit />} />
                        <Route path="/transfer" element={<Transfer />} />
                        
                        
                        <Route path="/clients" element={<Client />} />
                        <Route path="/AddClient" element={<CreateClient />} />

                        <Route path="/compte/client/:codeClient" element={<CompteClient />} />
                        
                        <Route path="/groupe/employe" element={<EmpGrp />} />
        
                        <Route path="/comptes" element={<Account />} />
                        <Route path="/AddCompte" element={<CompteForm />} />
                        <Route path="/compte/:id" element={<OneCompte />} />

                        <Route path="/Onecompte" element={<CompteOne />} />

                        <Route path="/AddEmploye" element={<AddEmploye />}/>
                        <Route path="/employes" element={<Employee />} />
                
                        <Route path="/Addgroupe" element={<GroupForm />} />
                        <Route path="/groupes" element={<Group />} />
                        <Route path="/emp2grp" element={<AssignEmployeToGroupe />} />
                        
                        
                        <Route path="/withdraw" element={<Withdraw />} />
                        <Route path="/deposit" element={<Deposit />} />
                        <Route path="/operations/:compteCode" element={<OperationsList />} />
                        <Route path="/" element={<h2 className='text-center'>Welcome to the Bank App</h2>} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
