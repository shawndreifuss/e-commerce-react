"use client";
import React from "react";
import FeedbackCard from "../../components/Homepage/Cards/FeedbackCard";
import { Typography } from "@material-tailwind/react";

const FEEDBACKS = [
  {
    feedback:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate",
    client: "Jessica Devis",
    title: "Customer",
    img: "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=",
  },
  {
    feedback:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate",
    client: "Justin Ray",
    title: "Quis autem vel eum iure reprehenderit qui in ea voluptate",
    img: "https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?b=1&s=170667a&w=0&k=20&c=FycdXoKn5StpYCKJ7PdkyJo9G5wfNgmSLBWk3dI35Zw=",
  },
  {
    feedback:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate",
    client: "Misha Stam",
    title: "Customer",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
  },
];

export function Feedback() {
    return (
        <section className="px-8 py-36">
            <div className="container mx-auto">
                <div className="mb-16 flex flex-col items-center w-full">
                    <Typography variant="h2" color="blue-gray" className="mb-2">
                        What Our Clients are Saying
                    </Typography>
                    <Typography
                        variant="lead"
                        className="mb-10 max-w-3xl lg:text-center !text-gray-500"
                    >
                        &quot;At vero eos et accusamus et iusto odio dignissimos ducimus qui
                        blanditiis praesentium voluptatum deleniti atque corrupti quos
                        dolores et quas molestias excepturi sint occaecati cupiditate non
                        provident&quot;
                    </Typography>
                </div>
                <div className="grid gap-x-8 gap-y-12 lg:px-32 grid-cols-1 md:grid-cols-3">
                    {FEEDBACKS.map((props, key) => (
                        <FeedbackCard key={key} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Feedback;
