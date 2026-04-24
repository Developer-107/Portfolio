<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\Stack;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       $projects = [
            [
                'title' => 'Cash EE',
                'description' => 'Cash EE is a tech marketplace for second-hand electronics where users can browse and explore products online, then complete purchases in-store after contacting the shop.',
                'url' => 'https://cashee.ge/',
                'image' => 'https://res.cloudinary.com/dl5hzfzkv/image/upload/v1777026611/CasheeMainPage_u8hjsi.png',
                'stacks' => ['Node.js', 'Express.js', 'React', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Prisma'],

            ], 
            [
                'title' => 'Vivere',
                'description' => 'Vivere is an advertising company that operates both online and physically, helping businesses promote their products and services through digital platforms and real-world advertising solutions.',
                'url' => 'https://realitynews-production.up.railway.app/',
                'image' => 'https://res.cloudinary.com/dl5hzfzkv/image/upload/v1777026610/VivereMainPage_md0xh3.png',
                'stacks' => ['Node.js', 'Express.js', 'React', 'Vite', 'TypeScript', 'Tailwind CSS'],
            ], 
            [
                'title' => 'Caucasus Insight',
                'description' => 'Caucasus Insight is a platform focused on delivering news, analysis, and insights about the Caucasus region, covering politics, economy, and social developments.',
                'url' => 'https://cashee.ge/',
                'image' => 'https://res.cloudinary.com/dl5hzfzkv/image/upload/v1777026610/CaucasusInsightMainPage_oxrcwr.png',
                'stacks' => ['Next.js','Node.js', 'Express.js', 'React', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Prisma', 'Zod'],

            ], 
            [
                'title' => 'Eloshi',
                'description' => 'Eloshi Shop is a modern e-commerce website that allows users to explore products, add them to cart, and complete purchases through a smooth and user-friendly interface.',
                'url' => 'https://eloshi-app.vercel.app/',
                'image' => 'https://res.cloudinary.com/dl5hzfzkv/image/upload/v1777026611/EloshiMainPage_lhejtf.png',
                'stacks' => ['Next.js','Node.js', 'Express.js', 'React', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Prisma', 'Zod'],

            ], 
            [
                'title' => 'Kursio',
                'description' => 'Kursio is an online learning platform where users can explore and access courses to improve their skills and knowledge in different fields.',
                'url' => 'https://kursebige-production-09a3.up.railway.app/',
                'image' => 'https://res.cloudinary.com/dl5hzfzkv/image/upload/v1777026609/KursioMainPage_pcqiqr.png',
                'stacks' => ['Next.js','Node.js', 'Express.js', 'React', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Prisma', 'Zod'],
            ],
        ];

        foreach ($projects as $data) {

            $project = Project::create([
                'title' => $data['title'],
                'description' => $data['description'],
                'url' => $data['url'],
                'image' => $data['image'],
            ]);

            $stackIds = Stack::whereIn('name', $data['stacks'])
                ->pluck('id')
                ->toArray();

            $project->stacks()->attach($stackIds);
        }
    }
}
