Green-Apple

Prerequisites:

   1. Git    : https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
   2. Docker : https://docs.docker.com/engine/install/

Steps:

   1. Navigate to where you want to clone the repository.
   2. Open a terminal inside the folder and clone the repository by running the following command:
                
          git clone https://github.com/Zubaer-Alam/greenApple
          
   3. Navigate to the cloned directory:
            
          cd greenApple
          
   4. Build and run the backend Docker containers:
         
          docker compose up -d
   
   5. Navigate to the interface directory:
            
          cd interface       
   
   4. Install npm dependencies:
         
          npm i
   
   4. Run the frontend application:
         
          npm run dev
   
   5. Open your browser and access http://localhost:5173 to view the app.
   6. After you have finished viewing the app, stop the backend container:

          docker compose down
          
   

