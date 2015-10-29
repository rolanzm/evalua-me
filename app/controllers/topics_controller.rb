class TopicsController < ApplicationController
  skip_before_filter :verify_authenticity_token
  before_action :set_topic, only: [:show, :edit, :update, :destroy]

  # GET course/:course_id/topics
  def index
    @topics = Topic.all.where(:course_id => params[:course_id])
  end

  # GET /course/:course_id/topics/:id
  def show
  end

  # POST /course/:course_id/topics
  def create
    @topic = Topic.new(topic_params)
    @topic.course_id = params[:course_id]
    
    respond_to do |format|
      if @topic.save
        format.json { render :show, status: :created, location: course_topic_url(@topic.course_id, @topic) }
      else
        format.json { render json: @topic.errors, status: :unprocessable_entity }
      end
    end
  end
  
  # PATCH/PUT /course/:course_id/topics/:id
  def update
    respond_to do |format|
      if @topic.update(topic_params)
        format.json { render :show, status: :ok, location: course_topic_url(@topic.course_id, @topic) }
      else
        format.json { render json: @topic.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /course/:course_id/topics/:id
  def destroy
    @topic.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_topic
      @topic = Topic.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def topic_params
      params.require(:topic).permit(:name, :course_id)
    end
end
