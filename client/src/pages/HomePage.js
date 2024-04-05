import React from 'react';
import Layout from '../components/Layout/Layout';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Layout>
       <div className="home-container">
        <h1>Welcome to Financial Health Management</h1>
        <p className="home-description">
          Financial Health Management is your premier platform for achieving financial excellence. We understand the significance of investment and budgeting in securing your financial future.
        </p>
        <p className="home-description">
          Our platform offers a comprehensive suite of tools and resources designed to empower you to make informed financial decisions. From expense tracking to investment analysis, our features are tailored to meet your diverse financial needs.
        </p>
        <p className="home-description">
          Take control of your finances today and embark on a journey towards financial stability and success with Financial Health Management. Here's why our platform stands out:
        </p>
        <ul className="features-list">
          <li>Personalized Investment Analysis: Gain insights into your investment portfolio and make smarter investment decisions tailored to your financial goals.</li>
          <li>Robust Expense Tracking: Keep track of your spending habits effortlessly and identify areas for potential savings.</li>
          <li>Insightful Financial Blog: Stay updated with the latest financial trends and expert insights through our informative blog articles.</li>
          <li>Interactive Calculators: Utilize our suite of calculators to estimate returns, plan budgets, and analyze various financial scenarios.</li>
        </ul>
        <div className="navigation-buttons">
          <Link to="/expense" className="btn btn-primary">Expense Tracking</Link>
          <Link to="/investment-analysis" className="btn btn-primary">Investment Analysis</Link>
          <Link to="/financial-blog" className="btn btn-primary">Financial Blog</Link>
          <Link to="/calculator" className="btn btn-primary">Calculator</Link>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage;
