<?php

namespace Database\Seeders;

use App\Models\Stack;
use Illuminate\Database\Seeder;

class StackSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $stacks = [
            'Laravel',
            'React',
            'Next.js',
            'Vue',
            'Vite',
            'Tailwind CSS',
            'Node.js',
            'Express.js',
            'Prisma',
            'Zod',
            'Inertia.js',
            'TypeScript',
            'JavaScript',
            'PHP',
            'PostgreSQL',
            'MySQL',
        ];

        foreach ($stacks as $stack) {
            Stack::create([
                'name' => $stack,
            ]);
        }
    }
}
